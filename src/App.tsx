import EmojiDisplay from "./components/EmojiDisplay.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { Emoji } from "./interfaces/Emoji.ts";

const ParentDiv = styled.div`
    width: 90vw;
    margin: auto;
    border: 4px solid #ff6b6b;
    border-radius: 15px;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
`;

const HeaderDiv = styled.div`
    text-align: center;
    color: white;
    margin-bottom: 30px;
`;

const Title = styled.h1`
    font-size: calc(20px + 2vw);
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
    font-size: calc(10px + 1vw);
    margin: 10px 0;
    opacity: 0.9;
`;

export default function App() {
    // useState Hook to store Data
    const [data, setData] = useState<Emoji[]>([]);

    // useEffect Hook for API handling and error management
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://emojihub.yurace.pro/api/all");
            const emojis: Emoji[] = await rawData.json();
            setData(emojis);
        }

        fetchData()
            .then(() => console.log("Emoji data fetched successfully"))
            .catch((e: Error) => console.log("There was an error: " + e));

    }, [data.length]);

    return (
        <ParentDiv>
            <HeaderDiv>
                <Title>🎨 Emoji Explorer</Title>
                <Subtitle>Discover amazing emojis from different categories!</Subtitle>
            </HeaderDiv>
            <EmojiDisplay data={data} />
        </ParentDiv>
    );
}
