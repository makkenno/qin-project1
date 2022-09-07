import {
  Box,
  Text,
  Space,
  Group,
  Progress,
  useMantineTheme,
} from "@mantine/core";
import { TbStar, TbGitFork } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

export const Repository = () => {
  const theme = useMantineTheme();
  return (
    <Box>
      <Text
        color="dark.6"
        weight={700}
        size={18}
        sx={{ fontFamily: "YuGothic", lineHeight: "28px" }}
      >
        lightsound/next-tailwind
      </Text>
      <Space h="xs" />
      <Text>Next.js starter template.</Text>
      <Space h="xs" />
      <Group spacing="sm">
        <Group spacing={4}>
          <TbStar size={15} stroke={theme.colors.dark[2]} />
          <Text
            color="dark.2"
            weight={700}
            size={12}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            117
          </Text>
        </Group>
        <Group spacing={4}>
          <TbGitFork size={15} stroke={theme.colors.dark[2]} />
          <Text
            color="dark.2"
            weight={700}
            size={12}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            18
          </Text>
        </Group>
      </Group>
      <Space h="xs" />
      <Progress
        size="md"
        sections={[
          { value: 65.5, color: "#3178C6" },
          { value: 33.7, color: "#F1E05A" },
          { value: 0.8, color: "#EDEDED" },
        ]}
      />
      <Space h="xs" />
      <Group spacing="sm" noWrap>
        <Group spacing="xs" noWrap>
          <FaCircle size={6} fill="#3178C6" />
          <Text
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            TypeScript
          </Text>
          <Text
            color="dark.2"
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            65.5%
          </Text>
        </Group>
        <Group spacing="xs" noWrap>
          <FaCircle size={6} fill="#F1E05A" />
          <Text
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            JavaScript
          </Text>
          <Text
            color="dark.2"
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            33.7%
          </Text>
        </Group>
        <Group spacing="xs" noWrap>
          <FaCircle size={6} fill="#EDEDED" />
          <Text
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            Other
          </Text>
          <Text
            color="dark.2"
            size={12}
            weight={700}
            sx={{
              fontFamily: "Avenir Next, sans-serif",
              lineHeight: "19px",
            }}
          >
            0.8%
          </Text>
        </Group>
      </Group>
    </Box>
  );
};
