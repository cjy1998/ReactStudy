import { UserDetailContext } from "../context/UserDetailContext";
import { api } from "../convex/_generated/api";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import React, { useEffect, useState } from "react";
import { createUser } from "@/lib/actions";
const Provider = ({ children }) => {
  const user = useUser();
  // const createNewUserMutation = useMutation(api.users.CreateNewUser);
  const [userDetail, setUserDetail] = useState(null);
  const CreateUser = async () => {
    const data = {
      name: user?.displayName,
      email: user?.primaryEmail,
      picture: user?.profileImageUrl,
    };
    // const result = await createNewUserMutation(data);
    const result = await createUser(data);
    console.log(result);

    setUserDetail(result);
  };
  useEffect(() => {
    user && CreateUser();
  }, [user]);
  return (
    <UserDetailContext value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext>
  );
};

export default Provider;
