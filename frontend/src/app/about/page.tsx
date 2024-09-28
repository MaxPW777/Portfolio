function AboutComponent() {
    return (<div className="bg-white p-4 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center">About</h1>
            <p className="text-center mt-4">This is a simple about page</p>
        </div>
    );
}

function aboutPage() {
    return (
        <main className="flex h-screen min-h-screen items-center justify-center">
            <AboutComponent/>
        </main>
    );
}

export default aboutPage;
