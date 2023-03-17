import React from 'react';

const Footer = () => {
    return (
        <div className="w-screen absolute left-0 h-auto bg-slate-200 p-4 md:p-8">
            <div className="container bg-sky-200">
                <div className="text-center mb-2">
                    <div className="font-bold">This is footer</div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex md:flex-row">
                        <div className="text-justify p-2 md:p-4 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore porro alias consequuntur dolorem amet ad voluptatibus dicta, quo illo molestiae cum est neque totam autem aliquid, animi vitae eveniet?</div>
                        <div className="text-justify p-2 md:p-4 text-sm md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quia doloremque odio accusamus tempora, eligendi harum earum, quo commodi porro aut facere quasi illo quod sapiente ex sed repellat eaque.</div>
                    </div>
                    <div className="flex md:flex-row">
                        <div className="text-justify p-2 md:p-4 text-sm md:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatibus eos repudiandae magni corporis quia id reprehenderit enim natus obcaecati rerum eaque a placeat temporibus, consequatur, suscipit recusandae, architecto quos!</div>
                        <div className="text-justify p-2 md:p-4 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quibusdam ipsum fugit veritatis itaque quaerat nesciunt fuga eveniet asperiores modi, deleniti perspiciatis eaque fugiat eos. Pariatur asperiores dicta reprehenderit facilis.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;