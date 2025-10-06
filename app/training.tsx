export function Books() {
    return (
        <div className="bg-amber-100 py-6 px-4">
            <div className="grid grid-cols-4 gap-4">
                {/*item 1*/}
                <div className="text-center">
                    <img src="" className="mx-auto w-16 h-20" alt="کتاب زبان" />
                </div>
                {/*item 2*/}
                <div className="text-center">
                 <img src=""  className="mx-auto w-16 h-20" alt="کتاب ریاضی" />         
                </div>
                {/*item 3*/}
                <div className="text-center">
                <img src="" className="mx-auto w-16 h-20" alt="لوازم التحریر" />
                </div>
            </div>
        </div>
    )
}