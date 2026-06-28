import Link from "next/link";

type SaveBarProps = {
  hasChanges: boolean;
  isPublished: boolean;
  onSave: () => void;
  onPublish: () => void;
};

export default function SaveBar({
  hasChanges,
  isPublished,
  onSave,
  onPublish,
}: SaveBarProps) {
  const statusText = hasChanges
    ? "🟡 Unsaved Changes"
    : isPublished
      ? "🚀 Published"
      : "🟢 Draft Saved";

  const helperText = hasChanges
    ? "Save your draft or publish the latest version."
    : isPublished
      ? "This lesson is published locally."
      : "Your draft is saved locally.";

  return (
    <div className="saveBar">
      <div>
        <strong>{statusText}</strong>
        <p>{helperText}</p>
      </div>

      <div className="saveBarActions">
        <button className="primaryButton" onClick={onSave}>
          Save Draft
        </button>

        <Link className="secondaryButton" href="/student">
          Preview
        </Link>

        <button className="secondaryButton" onClick={onPublish}>
          Publish
        </button>
      </div>
    </div>
  );
}