import Link from "next/link";

type SaveBarProps = {
  hasChanges: boolean;
  onSave: () => void;
};

export default function SaveBar({ hasChanges, onSave }: SaveBarProps) {
  return (
    <div className="saveBar">
      <div>
        <strong>{hasChanges ? "🟡 Unsaved Changes" : "🟢 Draft Saved"}</strong>
        <p>{hasChanges ? "Save your draft before publishing." : "Your draft is up to date."}</p>
      </div>

      <div className="saveBarActions">
        <button className="primaryButton" onClick={onSave}>
          Save Draft
        </button>

        <Link className="secondaryButton" href="/student">
          Preview
        </Link>

        <button className="secondaryButton">Publish</button>
      </div>
    </div>
  );
}