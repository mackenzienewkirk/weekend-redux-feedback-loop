function Success() {

    return (
        <div className="success">
            <h3>Success! Your feedback has been submitted.</h3>
            <button className="next-btn" onClick={() => location.href='/#/'}>Take Survey Again</button>
        </div>
    );
}

export default Success;