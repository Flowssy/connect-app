import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";
import UserCard from "../../components/user-card";
import { UsersData } from "../mock/users-data";
export default function Userspage() {

const users = UsersData;

console.log(users);

    return(
        <div id="container-user" className="flex min-h-screen">
            <div 
            id="navigation" className="bg-cyan-300 w-[250px] flex flex-col items-center gap-8 p-5"
            >
                <h1 className="text-3xl text-black font-bold">Connect</h1>
                <div className="flex flex-col gap-3">
                    <button className="text-white bg-black w-[150px] p-1 rounded-lg flex gap-2"><IconUser /> User</button>
                    <button className="text-black bg-white w-[150px] p-1 rounded-lg flex gap-2"><IconKey />Hak Akses</button>
                    <button className="text-black bg-white w-[150px] p-1 rounded-lg flex gap-2"><IconLogout /> Logout</button>
                </div>
                 </div>
                 <div id="content" className="bg-white w-full p-5">
                <input placeholder="cari user"/>
                {users.map((user, index) => (
                <UserCard
                    key={index}
                    fullname={user.fullname}
                    email={user.email}
                    roles={user.roles}
                    status={user.status}
                    />
                ))}
        </div>
        </div>
    );
}