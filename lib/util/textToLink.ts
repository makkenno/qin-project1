/**
 * テキスト内のハッシュタグやURLをリンクにする
 * @param comment
 * @returns
 */
export const textToLink = (comment: string) => {
  // 正規表現でURLを抽出
  const regexp_url = /(https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+)/g;
  let linkedComment = comment.replace(
    regexp_url,
    '<a class="mantine-Text-root mantine-Anchor-root mantine-1ut1du9" href="$1">$1</a>'
  );

  // 正規表現で#を抽出
  const regexp_hash = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;
  linkedComment = linkedComment.replace(
    regexp_hash,
    '<a class="mantine-Text-root mantine-Anchor-root mantine-1ut1du9" href="/search?q=$1&type=hash">#$1</a>'
  );

  // 正規表現で@を抽出
  const regexp_at = /@+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;
  linkedComment = linkedComment.replace(
    regexp_at,
    '<a class="mantine-Text-root mantine-Anchor-root mantine-1ut1du9" href="/search?q=$1&type=at">@$1</a>'
  );

  return linkedComment;
};
