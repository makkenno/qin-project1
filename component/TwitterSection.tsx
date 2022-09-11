import { Space, Stack } from "@mantine/core";
import { SectionTitle, Tweet, Button, Container } from ".";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

type TweetType = {
  created_at: string;
  id: string;
  text: string;
};
type Tweets = TweetType[];
type TwitterUser = {
  profile_image_url: string;
  id: string;
  username: string;
  name: string;
};

export const TwitterSection = () => {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data: tweets, error: tweetsError } = useSWR<{ data: Tweets }>(
    "/api/twitter/tweet",
    fetcher
  );
  const { data: user, error: userError } = useSWR<{ data: TwitterUser }>(
    "/api/twitter/user",
    fetcher
  );

  if (!tweets || tweetsError || !user || userError) {
    return <>エラー</>;
  }
  return (
    <Container>
      <SectionTitle title="Twitter" />
      <Space h="md" />
      <Stack spacing={56}>
        {tweets.data.map((tweet: TweetType) => (
          <Tweet
            key={tweet.id}
            name={user.data.name}
            username={user.data.username}
            tweetContent={tweet.text}
            profileImageUrl={user.data.profile_image_url}
            createdAt={tweet.created_at}
          />
        ))}
        <Button component="a" href="https://twitter.com/maki09422264">
          View on Twitter
        </Button>
      </Stack>
    </Container>
  );
};
