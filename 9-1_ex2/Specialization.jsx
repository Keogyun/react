import React from "react";
import Dialogue from "./Dialogue";

function WarningDialogue() {
    return (
        <Dialogue
            isButton="true"
            backgroundColor="yellow"
            title="Warning"
            message="경고"
        />
    );
}

function WelcomeDialogue() {
    return (
        <Dialogue
            isButton="false"
            backgroundColor="green"
            title="Welcome"
            message="어서오세요"

        />
    );
}

function ErrorDialogue() {
    return (
        <Dialogue
            isButton="true"
            backgroundColor="red"
            title="Error"
            message="오류"
        />
    );
}

function NoticeDialogue() {
    return (
        <Dialogue
            isButton="false"
            backgroundColor="blue"
            title="Notice"
            message="공지사항"
        />
    );
}

function Specialization() {
    return (
        <div>
            <WarningDialogue />
            <WelcomeDialogue />
            <ErrorDialogue />
            <NoticeDialogue />
        </div>
    );
}

export default Specialization;