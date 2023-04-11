import useSWR from "swr";

const Downloads = () => {
    const {data, error} = useSWR("/api/health", async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    });

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            <h1>Downloads</h1>
            <p>
                <strong>Downloads:</strong> {data.downloads}
            </p>
        </div>
    );
};
export default Downloads;
