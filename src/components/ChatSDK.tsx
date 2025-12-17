import { useEffect } from 'react';

const ChatSDK: React.FC = () => {
  useEffect(() => {
    // Create a script element for the Coze SDK
    const sdkScript = document.createElement('script');
    sdkScript.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js';
    sdkScript.onload = () => {
      initializeChatSDK();
    };
    sdkScript.onerror = () => {
      console.error('Failed to load Coze Chat SDK');
    };
    
    document.body.appendChild(sdkScript);

    function initializeChatSDK() {
      try {
        if (window.CozeWebSDK) {
          new window.CozeWebSDK.WebChatClient({
            config: {
              type: 'bot',
              bot_id: '7584495694623670323',
              isIframe: false,
            },
            auth: {
              type: 'token',
              token: 'pat_fdMICc3yjqO5Y02G8SYQZtn5PQKKcm7F2twX5s6GjZzQU69HrNDEBl3OmKeynxBh',
              onRefreshToken: async () => 'token'
            },
            userInfo: {
              id: 'user',
              url: 'https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/coze-logo.png',
              nickname: 'User',
            },
            ui: {
              base: {
                icon: 'https://lf-coze-web-cdn.coze.cn/obj/eden-cn/lm-lgvj/ljhwZthlaukjlkulzlp/coze/chatsdk-logo.png',
                layout: 'pc',
                lang: 'en',
                zIndex: 1000
              },
              header: {
                isShow: true,
                isNeedClose: true,
              },
              asstBtn: {
                isNeed: true
              },
              footer: {
                isShow: true,
                expressionText: 'Powered by ...',
              },
              chatBot: {
                title: 'Coze Bot',
                uploadable: true,
                width: 390,
              },
            },
          });
        }
      } catch (error) {
        console.error('Failed to initialize Coze Chat SDK:', error);
      }
    }

    // Clean up function
    return () => {
      document.body.removeChild(sdkScript);
    };
  }, []);

  return null;
};

export default ChatSDK;