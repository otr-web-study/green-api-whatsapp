import { ArrowLeft } from './UI/icons';
import { useRecipientControls } from '../hooks/useRecipientsControls';

const Settings = () => {
  const { closePanel } = useRecipientControls();

  return (
    <>
      <div className="w-full h-[123px] px-4 flex justify-start items-end bg-bg_stripe_deeper">
        <button
          title="Go back"
          className="w-10 h-10 pb-6 flex justify-center items-center"
          onClick={closePanel}
        >
          <ArrowLeft className="w-6 h-6 text-white hover:stroke-bg_white_05" />
        </button>
        <p className="pb-5 ml-6 text-white text-xl">Settings</p>
      </div>
      <form className="h-full flex flex-col justify-center items-center px-6 gap-4">
        {/* <input
          value={recipient}
          name="recipient"
          id="recipient"
          placeholder="phone number"
          className="w-full bg-bg_gray h-9 px-3 rounded focus:outline-bg_stripe"
          onChange={onRecipientChange}
        ></input>
        <input
          value={title}
          name="title"
          id="apiToketitlenInstance"
          placeholder="title"
          className="w-full bg-bg_gray h-9 px-3 rounded focus:outline-bg_stripe"
          onChange={onTitleChane}
        ></input>
        <StateButton onClick={addClick}>Add</StateButton> */}
      </form>
    </>
  );
};

export default Settings;
