import styled from "styled-components";
import type { Emoji } from "../interfaces/Emoji.ts";

const AllEmojisDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    backdrop-filter: blur(10px);
`;

const SingleEmojiDiv = styled.div<{ category: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    min-width: 250px;
    padding: 20px;
    margin: 10px;
    background-color: ${(props) => {
        switch (props.category) {
            case "smileys and people": return "#FFE4E1";
            case "animals and nature": return "#E1F5E1";
            case "food and drink": return "#FFF8DC";
            case "travel and places": return "#E0F2F1";
            case "activities": return "#F3E5F5";
            case "objects": return "#E3F2FD";
            case "symbols": return "#FFF3E0";
            case "flags": return "#FFEBEE";
            default: return "#F5F5F5";
        }
    }};
    border: 3px solid ${(props) => {
        switch (props.category) {
            case "smileys and people": return "#FF6B6B";
            case "animals and nature": return "#4CAF50";
            case "food and drink": return "#FFC107";
            case "travel and places": return "#2196F3";
            case "activities": return "#9C27B0";
            case "objects": return "#607D8B";
            case "symbols": return "#FF9800";
            case "flags": return "#E91E63";
            default: return "#9E9E9E";
        }
    }};
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    font-family: 'Arial', sans-serif;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.3);
    }
`;

const EmojiChar = styled.div`
    font-size: 60px;
    margin-bottom: 15px;
    line-height: 1;
`;

const EmojiName = styled.h3`
    font-size: calc(12px + 0.5vw);
    font-weight: bold;
    color: #333;
    margin: 10px 0;
    text-transform: capitalize;
`;

const EmojiCategory = styled.p`
    font-size: calc(10px + 0.3vw);
    color: #666;
    margin: 5px 0;
    font-weight: 600;
    text-transform: capitalize;
`;

const EmojiGroup = styled.p`
    font-size: calc(9px + 0.3vw);
    color: #888;
    margin: 5px 0;
    font-style: italic;
    text-transform: capitalize;
`;

const UnicodeText = styled.p`
    font-size: calc(8px + 0.2vw);
    color: #999;
    margin: 8px 0 0 0;
    font-family: monospace;
    background-color: rgba(0,0,0,0.1);
    padding: 4px 8px;
    border-radius: 4px;
`;

export default function EmojiDisplay(props: { data: Emoji[] }) {
    return (
        <AllEmojisDiv>
            {props.data.map((emoji: Emoji, index: number) => (
                <SingleEmojiDiv key={index} category={emoji.category}>
                    <EmojiChar
                        dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
                    />
                    <EmojiName>{emoji.name}</EmojiName>
                    <EmojiCategory>📂 {emoji.category}</EmojiCategory>
                    <EmojiGroup>🏷️ {emoji.group}</EmojiGroup>
                    <UnicodeText>{emoji.unicode[0]}</UnicodeText>
                </SingleEmojiDiv>
            ))}
        </AllEmojisDiv>
    );
}
