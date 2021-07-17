import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderComposer, renderActions, renderSend, renderInputToolbar } from './InputToolbar';
import {
    renderSystemMessage,
    renderMessage,
    renderScrollToBottomComponent,
} from './MessageContainer';
import colors from '../../Themes/Colors';
import { padding } from '../../const';

const Chats = () => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    return (
        <GiftedChat
            messages={messages}
            text={text}
            onInputTextChanged={setText}
            onSend={onSend}
            user={{
                _id: 1,
                name: 'Aaron',
                avatar: 'https://placeimg.com/150/150/any',
            }}
            alignTop
            scrollToBottom
            scrollToBottomComponent={renderScrollToBottomComponent}
            scrollToBottomStyle={{ width: 35, height: 35, backgroundColor: colors.grey }}
            // alwaysShowSend={true}
            bottomOffset={26}
            renderActions={renderActions}
            renderComposer={renderComposer}
            renderSend={renderSend}
            renderInputToolbar={renderInputToolbar}
            renderSystemMessage={renderSystemMessage}
            renderMessage={renderMessage}
            messagesContainerStyle={{ backgroundColor: colors.white, }}
        />
    );
};

export default Chats;