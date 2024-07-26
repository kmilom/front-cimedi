import React from "react";
import DoctorItemsList from "../components/doctorItemsList";
import LateralMenu from "../components/lateralMenu";
import Header from "../components/header";
import HeaderDoctor from "../components/headerDoctor";

const DoctorView = () => {
    const personExample = {
        name: 'Camilo',
        lastName: 'Moran'
    }

    return(
        <div className="min-h-screen bg-gray-100">
            <Header>
                <HeaderDoctor person = {personExample} />
            </Header>
            <div className="min-h-screen grid grid-cols-4 gap-4">
                <div className="col-span-1 ">
                    <LateralMenu>
                        <DoctorItemsList />
                    </LateralMenu>
                </div>
                <div className="col-span-3">
                    dsa
                </div>
            </div>
        </div>
    );
}

export default DoctorView;