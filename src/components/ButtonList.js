import Button from "./Button";

const ButtonListNames = ["All", "Gaming", "Football", "Cricket", "News", "All", "Gaming", "Football", "Cricket", "News", "All", "Gaming", "Football"]

const ButtonList = () => {
    return (
        <div className="flex">
            {
                ButtonListNames.map((buttonName, index) =>
                    <Button name={buttonName} />
                )
            }
        </div>
    )
}

export default ButtonList;