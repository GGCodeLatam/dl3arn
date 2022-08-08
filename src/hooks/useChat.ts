import { useEffect } from "react";

function useChat({ url }: { url?: string }) {
  useEffect(() => {
    if (!url) return;

    const chat = document.createElement("script");

    chat.src = url;
    chat.type = "text/javascript";
    chat.id = "hs-script-loader";
    chat.async = true;
    chat.defer = true;

    document.body.appendChild(chat);

    return () => {
      document.body.removeChild(chat);
    };
  }, [url]);
}

export default useChat;
