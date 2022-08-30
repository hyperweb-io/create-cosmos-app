import React from "react";
import { Text, Stack, Box } from "@chakra-ui/react";
import { ConnectedUserCardType } from "./types";

export const ConnectedUserInfo = ({
  username,
  icon,
}: ConnectedUserCardType) => {
  return (
    <Stack
      isInline={true}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.100", "blackAlpha.100")}
      boxShadow={useColorModeValue(
        "inset 0 0 12px -5px #d3d3d3",
        "inset 0 0 14px -7px #828282"
      )}
      w="full"
      minW="fit-content"
      p={2}
      paddingX={20}
    >
      <Box
        display={icon ? "block" : "none"}
        minW={20}
        maxW={20}
        w={20}
        minH={20}
        maxH={20}
        h={20}
        borderRadius="full"
        overflow="hidden"
      >
        {icon}
      </Box>
      {username && (
        <Text fontSize={{ md: "xl" }} fontWeight="semibold">
          {username}
        </Text>
      )}
    </Stack>
  );
};
