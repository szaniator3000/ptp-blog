import { FaBrain, FaHeartbeat, FaUserMd, FaNewspaper, FaComments } from 'react-icons/fa';

interface AdvantagesItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const AdvantagesSection = () => {
    const advantagesItems: AdvantagesItem[] = [
        {
            title: 'Zwiększenie wiedzy na temat zdrowia psychicznego',
            description: 'Na naszym blogu znajdziesz wiele artykułów na temat psychologii i psychiatrii, które pomogą Ci zrozumieć różne aspekty zdrowia psychicznego i poradzić sobie z trudnościami emocjonalnymi.',
            icon: <FaBrain size={24} className="text-white" />,
        },
        {
            title: 'Promowanie zdrowego stylu życia',
            description: 'Nasz blog zachęca do dbania o zdrowie psychiczne i fizyczne poprzez publikowanie artykułów na temat zdrowych nawyków, aktywności fizycznej, a także diet i suplementów diety, które wpływają korzystnie na nasze samopoczucie.',
            icon: <FaHeartbeat size={24} className="text-white" />,
        },
        {
            title: 'Rzetelne informacje na temat terapii',
            description: 'Nasz blog publikuje artykuły na temat różnych metod terapeutycznych oraz wskazówki dotyczące wyboru terapeuty lub psychologa.',
            icon: <FaUserMd size={24} className="text-white" />,
        },
        {
            title: 'Aktualności z dziedziny psychiatrii',
            description: 'Na naszym blogu znajdziesz najnowsze informacje na temat badań naukowych oraz postępów w dziedzinie psychiatrii i psychologii.',
            icon: <FaNewspaper size={24} className="text-white" />,
        }
    ];

    return (
        <div className=" py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantagesItems.map((item, index) => (
                        <div key={index} className={`${index > 0 ? 'mt-10' : ''} px-6 sm:px-0`}>
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                {item.icon}
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                                <p className="mt-2 text-base text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdvantagesSection;
