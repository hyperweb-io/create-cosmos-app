import {
  Box,
  Button,
  ClipboardCopyText,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import { useEffect } from "react";
import { chains } from "chain-registry";
import { useChain } from "@cosmos-kit/react";
import { CHAIN_NAME, CHAIN_NAME_STORAGE_KEY } from "@/config";
import { ChainSelect } from "../wallet/Chain";
import { Logo } from "./Logo";

export type HeaderProps = {
  chainName?: string;
  onChainChange?: (chainName?: string) => void;
  onMoreButtonClick?: () => void;
};

export function Header({
  chainName = CHAIN_NAME,
  onChainChange = () => {},
  onMoreButtonClick = () => {},
}: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const { chain, address } = useChain(chainName);

  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const selected = localStorage.getItem(CHAIN_NAME_STORAGE_KEY);
    if (selected && selected !== chainName) {
      onChainChange(selected);
    }
  }, []);

  return (
    <Box
      p={{ mobile: "$6", tablet: "$6", desktop: "$8" }}
      display="flex"
      width="$full"
      alignItems="center"
      justifyContent="end"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="$divider"
    >
      <Box display={{ tablet: "block", desktop: "none" }}>
        <Button
          size="md"
          intent="secondary"
          variant="ghost"
          onClick={onMoreButtonClick}
          attributes={{ position: "relative" }}
          domAttributes={{
            style: { minWidth: "42px", height: "42px" },
          }}
        >
          <Box
            top="0"
            left="0"
            right="0"
            bottom="0"
            position="absolute"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="$inputBorder"
            borderRadius="$md"
            backgroundColor={useColorModeValue("transparent", "$inputBg")}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon name="verticalMore" size="$sm" color="$textSecondary" />
          </Box>
        </Button>
      </Box>
      <Box mx="auto" display={{ mobile: "block", desktop: "none" }}>
        <Logo width={160} />
      </Box>

      <Stack space="$6">
        <Box
          minWidth="16rem"
          display={{ mobile: "none", desktop: "flex" }}
          alignItems="center"
        >
          {address
            ? <ClipboardCopyText text={address} truncate="middle" />
            : null}
        </Box>
        <Box display={{ mobile: "none", tablet: "none", desktop: "block" }}>
          <ChainSelect
            chains={chains}
            chainName={chain.chain_name}
            onChange={onChainChange}
          />
        </Box>

        <Box display="block">
          <Button
            size="md"
            intent="secondary"
            variant="ghost"
            onClick={toggleColorMode}
            attributes={{ position: "relative" }}
            domAttributes={{
              style: { minWidth: "42px", height: "42px" },
            }}
          >
            <Box
              top="0"
              left="0"
              right="0"
              bottom="0"
              position="absolute"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="$inputBorder"
              borderRadius="$md"
              backgroundColor={useColorModeValue("transparent", "$inputBg")}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                name={useColorModeValue("moonLine", "sunLine")}
                size="$sm"
                color="$textSecondary"
              />
            </Box>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
