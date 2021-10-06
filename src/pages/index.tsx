import { GetStaticProps } from "next";
import Advantages from "ui/components/partials/index/_advantages";
import FrequentQuestions from "ui/components/partials/index/_frequent-questions";
import Presentation from "ui/components/partials/index/_presentation";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: "",
        },
    };
};

export default function Index() {
    return (
        <div>
            <Presentation />
            <Advantages />
            <FrequentQuestions />
        </div>
    );
}
