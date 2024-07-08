import DashboardBox from "@/components/DashboardBox";
import {useGetKpisQuery} from "@/state/api.ts";

type Props = {};
const Row1 = (props: Props) => {
    const { data } = useGetKpisQuery();
    console.log('Data:', data)
    return (
        <>
            <DashboardBox gridArea="a">
            </DashboardBox>
            <DashboardBox gridArea="b">
            </DashboardBox>
            <DashboardBox gridArea="c">
            </DashboardBox>
        </>
    );
};

export default Row1;
