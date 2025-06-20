import React from 'react';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Icon } from '@/components/ui/icon';
import { HeartIcon, BookmarkIcon } from 'lucide-react-native';

// A reusable Post Card component
export const PostCard = ({ post }: { post: any }) => {
  // Helper to resolve image source
  const resolveSource = (img: any) => {
    if (typeof img === 'string') {
      return { uri: img };
    }
    return img;
  };

  // Helper to render the image grid
  const renderImages = () => {
    if (!post.images || post.images.length === 0) {
      return null;
    }

    // Single Image
    if (post.images.length === 1) {
      return <Image source={resolveSource(post.images[0])} className="w-full h-80 rounded-lg" alt="Outfit" />;
    }

    // 2-4 Images in a grid
    return (
        <HStack className="w-full h-80 rounded-lg overflow-hidden" space="xs">
          <VStack className="flex-1" space="xs">
            <Image source={resolveSource(post.images[0])} className="flex-1 w-full" alt="Outfit 1" />
            {post.images[2] && <Image source={resolveSource(post.images[2])} className="flex-1 w-full" alt="Outfit 3" />}
          </VStack>
          <VStack className="flex-1" space="xs">
            {post.images[1] && <Image source={resolveSource(post.images[1])} className="flex-1 w-full" alt="Outfit 2" />}
            {post.images[3] && <Image source={resolveSource(post.images[3])} className="flex-1 w-full" alt="Outfit 4" />}
          </VStack>
        </HStack>
    );
  };

  return (
      <VStack className="mb-6 bg-white">
        {/* Image Grid */}
        {renderImages()}

        {/* Post Caption/Text */}
        <Text className="mt-3 mx-1 text-base">{post.caption}</Text>

        {/* User and Actions Footer */}
        <HStack className="justify-between items-center mt-3">
          {/* User Info */}
          <HStack className="items-center" space="sm">
            <Image source={resolveSource(post.user.avatar)} className="w-10 h-10 rounded-full" alt={post.user.name} />
            <Text className="font-bold">{post.user.name}</Text>
          </HStack>

          {/* Action Icons */}
          <HStack className="items-center" space="md">
            <HStack className="items-center" space="xs">
              <Icon as={HeartIcon} className="text-gray-600" />
              <Text className="text-gray-600">{post.likes}</Text>
            </HStack>
            <Icon as={BookmarkIcon} className="text-gray-600" />
          </HStack>
        </HStack>
      </VStack>
  );
};