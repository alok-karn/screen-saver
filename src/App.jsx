import Spline from "@splinetool/react-spline";

export default function App() {
    return (
        <main
            style={{
                height: "100vh",
                position: "relative",
            }}>
            <Spline scene="https://prod.spline.design/CL19mckxbQRdOENE/scene.splinecode" />
            <div className="hide_logo"></div>
        </main>
    );
}
