export default function UserCard({ fullname, email, roles, status }) {
    return (
    <div
        id="user-card"
        className="border p-3 rounded-lg flex justify-between items-center"
        >
                <div>
                    <h2 className="text-[18px] font-bold mb-{1px} text-slate-950" >
                        {fullname}
                     </h2>
                     <p className="text-base text-black mb-2">{email}</p>
                     <span className="bg-black text-white text-[11px] px[9px] py-[5px] rounded-mr-[6px]">
                        {roles}
                     </span>
                     </div>
                     <span className="bold-text status text-[16px] font-bold">{status}</span>
                </div>
);
}