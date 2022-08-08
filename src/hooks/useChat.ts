import { useEffect } from "react";
import { HUBSPOT } from "constants/index";

function useChat() {
  useEffect(() => {
    if (!HUBSPOT) return;

    const chat = document.createElement("script");

    chat.src = HUBSPOT;
    chat.type = "text/javascript";
    chat.id = "hs-script-loader";
    chat.async = true;
    chat.defer = true;

    document.body.appendChild(chat);

    return () => {
      document.body.removeChild(chat);
    };
  }, []);
}

export default useChat;
