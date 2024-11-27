import React from 'react';
import { useTranslation } from 'react-i18next';
import { MicrophoneIcon, StopIcon, TrashIcon } from '@heroicons/react/24/outline';

interface VoiceNotesProps {
  notes: string[];
  onChange: (notes: string[]) => void;
}

export function VoiceNotes({ notes, onChange }: VoiceNotesProps) {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = React.useState(false);
  const [mediaRecorder, setMediaRecorder] = React.useState<MediaRecorder | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        onChange([...notes, url]);
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err) {
      console.error('Erreur lors de l\'accès au microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const deleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    onChange(newNotes);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <MicrophoneIcon className="w-5 h-5" />
          {t('media.voice.title')}
        </h3>
      </div>

      <div className="space-y-3">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <audio src={note} controls className="w-full max-w-xs" />
            <button
              onClick={() => deleteNote(index)}
              className="p-1 text-gray-500 hover:text-red-500"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-md text-white
            ${isRecording
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-indigo-600 hover:bg-indigo-700'
            }
          `}
        >
          {isRecording ? (
            <>
              <StopIcon className="w-5 h-5" />
              {t('media.voice.stop')}
            </>
          ) : (
            <>
              <MicrophoneIcon className="w-5 h-5" />
              {t('media.voice.record')}
            </>
          )}
        </button>
      </div>
    </div>
  );
}