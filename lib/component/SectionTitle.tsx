import { Divider, Title } from "@mantine/core";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Title order={3}>{title}</Title>
      <Divider
        mt={20}
        size="sm"
        sx={(theme) => ({ borderTopColor: theme.colors.gray[2] })}
      />
    </>
  );
};
