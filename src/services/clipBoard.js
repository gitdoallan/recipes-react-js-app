export default function clipBoard(setCopied, url) {
  navigator.clipboard.writeText(url)
    .then(() => {
      setCopied(true);
    });
}
