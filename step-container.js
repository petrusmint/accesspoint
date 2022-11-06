'use strict';

const sampleLicense = [
  '0000001',
  '0000002',
  '0000003',
  '0000004',
  '0000005',
  '0000006',
  '0000007',
  '0000008',
  '0000009',
  '0000010',
  '0000011',
  '0000012',
  '0000013',
  '0000014',
  '0000015',
  '0000016',
  '0000017',
];

function LikeButton() {
  const [step, setStep] = React.useState(1);
  const [showButton, setShowbutton] = React.useState(false);
  const [message, setMessage] = React.useState({
    message: '',
    status: '',
  });
  const [formData, setFormData] = React.useState({
    license: '',
  });

  const handleChange = (key) => (e) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const countToStepThree = () => {
    setTimeout(() => {
      setShowbutton(true);
    // }, [1000]);
    }, [183000]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = sampleLicense.filter((data) => data === formData?.license);

    if (results.length > 0) {
      setMessage({
        message: 'License found!',
        status: 'success',
      });

      setTimeout(() => {
        setStep(4);
      }, [1000]);

      return;
    }

    setMessage({
      message: 'License not found!',
      status: 'failed',
    });
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className='step-one'>
          <h2>Thank You for connecting to ICTSI wifi</h2>
          <p>
            We'd like for you to watch our recent company ad to connect to our
            internet.
          </p>
          <div className='buttons'>
            <button
              onClick={() => {
                setStep(2);
                countToStepThree();
              }}
              className='accept'
            >
              Accept
            </button>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className='step-two'>
          <iframe
            width='1280'
            height='720'
            src='https://www.youtube.com/embed/9wqAUE2IHnY?autoplay=1&controls=0'
            title='ICTSI AVP (11.16.20)'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>

          {showButton ? (
            <button
              onClick={() => {
                setStep(3);
              }}
              className='proceed'
            >
              Proceed
            </button>
          ) : null}
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className='step-three'>
          <div className='title'>
            <h2>Thank You for Connecting to ICTSI</h2>
            <p>Please provide us the following information:</p>
          </div>

          <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-group mb-2'>
              <label className='form-label'>License</label>
              <input
                required
                className='control'
                placeholder='Enter here'
                value={formData?.license}
                onChange={handleChange('license')}
              />
            </div>

            <div className={`mb-3 message ${message?.status}`}>
              {message?.message}
            </div>

            <div className='submit-container'>
              <button className='submit' type='submit'>
                Submit
              </button>

              <button
                type='button'
                onClick={(e) => {
                  setFormData({
                    license: '',
                  });

                  setMessage({
                    message: '',
                    status: '',
                  });
                }}
                className='clear'
              >
                Clear Entries
              </button>
            </div>
          </form>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className='step-four'>
          <h2>Welcome to ICTSI!</h2>
          <p>Thank you, you now have use to our facilities with:</p>

          <div className='wifi-access'>
            <img src='./images/wifi.png' alt='wifi logo' />
            <p>5 Hours of Internet Access</p>
          </div>

          <button className='continue'>Continue</button>
        </div>
      );
    }
  };

  return <>{renderStep()} </>;
}

const rootNode = document.getElementById('step-container');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
