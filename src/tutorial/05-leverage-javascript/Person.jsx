// eslint-disable-next-line react/prop-types
import avatar from "../../assets/react.svg";
// eslint-disable-next-line react/prop-types
export const Person = ({ name, nickName = "shakeAndBake", images }) => {
  const img = images?.[0]?.small?.url || avatar;
  //   const img = images && images[0].small.url;
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>NickName:{nickName}</p>
        <img src={img} alt="" style={{ width: "100px" }} />
      </div>
    </li>
  );
};
