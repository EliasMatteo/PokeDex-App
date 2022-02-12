import Image from "next/image";

const FavHeartIcon = ({}) => {
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
};

export default FavHeartIcon