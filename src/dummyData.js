import { v4 as uuidv4 } from "uuid";

const dummyData = [
    {
        id: uuidv4(),
        title: "👍今からやること",
        tasks: [
            {
                id: uuidv4(),
                title: "Reactの勉強",
            },
            {
                id: uuidv4(),
                title: "Youtubeで勉強",
            },
            {
                id: uuidv4(),
                title: "散歩",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "👌今後の予定",
        tasks: [
            {
                id: uuidv4(),
                title: "Reactの復習",
            },
            {
                id: uuidv4(),
                title: "Youtubeで復習",
            },
            {
                id: uuidv4(),
                title: "筋トレ",
            },
            {
                id: uuidv4(),
                title: "皿洗い",
            },
        ],
    },
    {
        id: uuidv4(),
        title: "💕終わったリスト",
        tasks: [
            {
                id: uuidv4(),
                title: "風呂掃除",
            },
            {
                id: uuidv4(),
                title: "料理",
            },
            {
                id: uuidv4(),
                title: "塾",
            },
        ],
    }
];

export default dummyData;