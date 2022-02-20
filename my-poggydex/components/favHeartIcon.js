import Image from "next/image";
import React, {useState} from 'react';

const FavHeartIcon = ({
    onIconInteract=()=>{}
}) => {
    const [favColor, setFavColor] = useState(false);

    if(favColor === false) {
        return (
            <div className="fav-heart">
                <Image
                    src={"/../public/icon/heart.svg"}
                    alt="favorite"
                    width={20}
                    height={20}>
                </Image>
            </div>
        );
    }

    else if(favColor === true) {
    return (
        <div className="fav-heart">
            <Image
                src={"/../public/icon/heartfilled.svg"}
                alt="favorite"
                width={30}
                height={30}>
            </Image>
        </div>
        );
    };
}

export default FavHeartIcon