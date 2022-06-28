import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCompany } from "../app/companySlice";
import CompanyContacts from "../components/CompanyContacts";
import CompanyInfo from "../components/CompanyInfo";
import CompanyPhoto from "../components/CompanyPhoto";
import ContentHeader from "../components/ContentHeader";
import ProcessManager from "../components/ProcessManager";
import { fetchContacts } from "../app/contactsSlice";

const CompanyPage = () => {
    const companyData = useAppSelector((state) => state.companies);
    const contactsData = useAppSelector((state) => state.contact);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCompany());
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <>
            <div className="page__info">
                <ProcessManager />
            </div>
            <div className="page__description content">
                <ContentHeader />
                {companyData.data && <CompanyInfo data={companyData.data} />}
                {contactsData.data && (
                    <CompanyContacts data={contactsData.data} />
                )}
                {companyData.data?.photos && (
                    <CompanyPhoto data={companyData.data?.photos} />
                )}
            </div>
        </>
    );
};

export default CompanyPage;
