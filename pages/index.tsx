import type { NextPage } from "next";
import { Box, Button, Text } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <Box>
      <Text underline>こんにちは</Text>
      <Button
        classNames={{
          label: "text-black",
        }}
        // styles={{
        //   label: {
        //     color: "black",
        //   },
        // }}
      >
        押してね
      </Button>
    </Box>
  );
};

export default Home;
