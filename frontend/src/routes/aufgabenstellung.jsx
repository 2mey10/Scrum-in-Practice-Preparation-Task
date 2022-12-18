import Typography from "@mui/material/Typography";

export default function Aufgabenstellung() {
    return (
        <div>
            <Typography
                variant="h5"
                gutterBottom
            >
                Preparation Task 1
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
            >
                The following describes the first preparation task(s) for the WebAPI+AI team. The underlying motivation of the preparation is to make sure that you have a fundamental understanding of the technologies/frameworks required to implement something usefull during the SCRUM week. Depending on your experience, completing this assignment should take a couple of hours up to a couple of days.The preparation tasks are assigned on a per-team basis, which implies that you can split the tasks such that some team-members only work on certain sub-tasks.

                For each task,  a plethora of tutorials is available online. We advise you to look for and follow these tutorials, as they will make your life much easier. Just make sure that you understand what the code is doing.
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
            >
                AI-Component
            </Typography>
            <Typography
                variant="caption">
                Python, Neural Networks, PyTorch, ONNX
            </Typography>
            <Typography
                variant="body1">
                As you might have guessed, the AI component will be a neural network based machine learning model. You do not need any in-depth knowledge of how neural networks work, but you should have an understanding of the basics of training and evaluating a classification model in PyTorch.
                PyTorch is a very popular deep learning framework used by, for example, Meta and Tesla. Train a small neural network for written character recognition on the MNIST dataset.
                ONNX is a open and neutral exchange format for neural networks (or machine learning models in general). Convert the neural network you just trained to the ONNX format.
                Load the exported model again in PyTorch and calculate the classification accuracy on the MNIST test set.
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
            >
                Web-Service-Component
            </Typography>
            <Typography
                variant="caption">
                Python, HTML, CSS, Django, JavaScript
            </Typography>
            <Typography
                variant="body1">
                The Web-Service shall be implemented based on the Django framework, which is used by several large companies, such as Meta (e.g. Instagram, behind the scenes, is Django). You may use JavaScript if you like, but this is optional.

                Use Django to set up a small webserver that displays at least 2 different pages with a generic greeting-message, e.g. "Hello World". Also, add some CSS (maybe consider using Bootstrap), so that the pages look nice. Use templates.
                Implement a user-registration: add a page where I can enter a username and a password to sign up, as well as a login-form. Django will do most of this work for you.
                Add a page that is only accessible by logged-in users and display a greeting-message for the current user, e.g. "Hello user".
                Implement a file-upload: add a page where logged-in users can upload an image to the server.
                In addition to the upload, users should be able to enter a textual description for the image. Store the meta-data of the images (i.e. the description and the name of the owner) in a database using Djangos Object-relational mapper (ORM).
                For each uploaded image, dynamically create a page (e.g. http://localhost/view/12345) where  everyone (authenticated or not) can view an uploaded image. This page should also display the user that uploaded the image, as well as the description that was provided by the user.

            </Typography>
        </div>
    );
}