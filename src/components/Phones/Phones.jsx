import PhonesCard from "./PhonesCard";


const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-base-200 p-4">
                {
                    phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;