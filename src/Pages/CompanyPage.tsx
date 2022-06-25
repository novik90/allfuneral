import React from "react";
import CompanyContacts from "../components/CompanyContacts";
import CompanyInfo from "../components/CompanyInfo";
import CompanyPhoto from "../components/CompanyPhoto";
import ContentHeader from "../components/ContentHeader";
import ProcessManager from "../components/ProcessManager";

const CompanyPage = () => {
    return (
        <>
            <div className="page__info">
                <ProcessManager />
            </div>
            <div className="page__description content">
                <ContentHeader />
                <CompanyInfo />
                <CompanyContacts />
                <CompanyPhoto />
            </div>
        </>
    );
};

export default CompanyPage;
