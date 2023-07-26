import DashboardLayout from "@/components/Layouts/DashboardLayout";

const Feedbacks = () => {
    return (
        <div>
            <h1>Feedbacks page</h1>
        </div>
    );
};

export default Feedbacks;

Feedbacks.getLayout = function getLayout(page){
    return(
        <DashboardLayout>
          {page}
        </DashboardLayout>
    )
}