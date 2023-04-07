import {IoIosContact} from "react-icons/io";

interface Props {
    name: string;
    position?: string;
}

const PersonCard = ({name, position}: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
            <div className="text-gray-800 text-4xl mb-4">
                <IoIosContact/>
            </div>
            <div className="text-center">
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                {position && <p className="text-sm text-gray-600">{position}</p>}
            </div>
        </div>
    );
};

export default PersonCard;
