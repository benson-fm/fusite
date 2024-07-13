const Family = () => {
    return (
        <div className="flex flex-col"> {/* parent container */}
            <header className="bg-[#cbc7b7] h-[840px] w-full flex flex-col items-center justify-center">  
                <div className="text-center">
                    <h1 className="text-black text-7xl font-bold tracking-[.25em]">PROGRAMS</h1>
                    <h2 className="text-black text-4xl mt-[48px] tracking-[.25em]">FAMILY</h2>
                </div>
            </header>

             {/* Entire white section 3352*/}
            <section className="bg-white w-full h-[594px] flex items-center justify-center"> {/* What is Fam system section 594*/}
                <div className="flex flex-col items-center justify-center  w-[1088px] h-[258px]">
                    <div>
                        <h1 className="text-2xl text-black tracking-[.1em]">WHAT IS OUR FAM SYSTEM</h1>
                    </div>
                    <div className="mt-[55px]">
                        <p className="text-black text-center">General members are assigned to a FUSION Family, referred to as “Fams,” 
                        with each named according to the theme of the school year. This system promotes camaraderie, professional 
                        development, and cultural enrichment through social gatherings, challenges, and friendly competition. The 
                        FUSION Family system significantly contributes to creating a strong sense of community within the organization.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[1540px] flex items-center justify-center"> {/* individual fam section 1540 */}
            </section>

            <section className="bg-white w-full h-[1218px] flex items-center justify-center"> {/* fam gallery section 1218 */}
            </section>
            
            <footer className="bg-[#fee270] w-full h-[355px]">
                <p className="text-black text-2xl text-center">Footer</p>
            </footer>
        </div>
    );
}
{/* 
<div className="flex items-center justify-center text-black border border-black w-[225px] h-[453px] relative bg-[#cbc7b7]">
        <div className="text-center transform -translate-y-[15%]">
            <div className="mb-5 pb-2">
                <h3 className="text-2xl tracking-[.1em]">{title}</h3>
            </div>
            <div>
                <p className="text-center pl-4 pr-4">{content}</p>
            </div>
        </div>
    </div>
    */}
export default Family;
