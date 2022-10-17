import {CSSProperties, FC} from "react";
import {BounceLoader} from "react-spinners";

const override: CSSProperties = {
    marginLeft: '20px',
    borderColor: "red",
    display: 'inline'
};

export const Spinner: FC = () => {
    return <BounceLoader
        color="black"
        cssOverride={override}
        size={30}
        speedMultiplier={1}
    />
}