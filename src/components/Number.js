import { useParams } from "react-router-dom"

const Number = () => {
    const params = useParams();
    console.log(params);
    return (
        <p>【{params.Id}】受け取った値です</p>
    )
}
export default Number