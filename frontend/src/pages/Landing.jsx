import { useState } from "react";
import { Wrapper } from "../components/Wrapper";

export function Landing(){

    return (
        <div>
            <div className="flex justify-center h-25 pt-8">welco  ajnedjsf jkdnkjasnkjnskjfncsknfkjme</div><br></br>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 ">
                <div className=" md:col-start-2 ">
                    <Wrapper to={'/learn'} linktext={"learn"} title={"learn"} description={"haha"} icontext={"learn"} src={"https://rnd-devops-app-infra-prod-static-assets.sgp1.digitaloceanspaces.com/tribex/stackup-web:0.1-078a628f3d44fc1dfc5a142e0ee3468161b475be/assets/hub-learn-533b20caf1f827ee5883c2b8ba2d4472a680220ce616b0a777b82501363a2c28.png"}></Wrapper>
                </div>

                <div className="md:col-start-3">
                    <Wrapper to={'/challenges'}linktext={"learn"} title={"learn"} description={"haha"} icontext={"learn"} src={"https://rnd-devops-app-infra-prod-static-assets.sgp1.digitaloceanspaces.com/tribex/stackup-web:0.1-078a628f3d44fc1dfc5a142e0ee3468161b475be/assets/hub-earn-1252194feaff5809351bfe2d5bc9a86cb83b62eb0caa06f7a0890464389b9bfa.png"}>
                    </Wrapper>
                </div>
            </div>
            
            

        </div>

    

    )
}

function Generator(to){
    return(
        <div>
            <div>{to}</div>
        </div>
    )
}