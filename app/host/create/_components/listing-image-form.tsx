import { MultiImageDropzone, type FileState } from "../../_components/image-dropzone"
import { useEdgeStore } from '@/lib/edgestore';
import { Dispatch, useState } from "react";
import { Button } from "@/components/ui/button"
import { SetStateAction } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface ListingImageFormProps {
    setImages: Dispatch<SetStateAction<string[] | null | undefined>>
}

const ListingImageForm: React.FC<ListingImageFormProps> = ({setImages}) => {
    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const { edgestore } = useEdgeStore();

    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
          const newFileStates = structuredClone(fileStates);
          const fileState = newFileStates.find(
            (fileState) => fileState.key === key,
          );
          if (fileState) {
            fileState.progress = progress;
          }
          return newFileStates;
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Images</CardTitle>
                <CardDescription>Add images to your listing</CardDescription>
            </CardHeader>
            <CardContent>
                <MultiImageDropzone
                    value={fileStates}
                    dropzoneOptions={{
                    maxFiles: 6,
                    }}
                    onChange={(files) => {
                    setFileStates(files);
                    }}
                    onFilesAdded={async (addedFiles) => {
                    setFileStates([...fileStates, ...addedFiles]);
                    await Promise.all(
                        addedFiles.map(async (addedFileState) => {
                            try {
                                const res = await edgestore.publicFiles.upload({
                                file: addedFileState.file as File,
                                onProgressChange: async (progress) => {
                                    updateFileProgress(addedFileState.key, progress);
                                    if (progress === 100) {
                                    // wait 1 second to set it to complete
                                    // so that the user can see the progress bar at 100%
                                    await new Promise((resolve) => setTimeout(resolve, 1000));
                                    updateFileProgress(addedFileState.key, 'COMPLETE');
                                    }
                                },
                                });
                                console.log(res);
                            } catch (err) {
                                updateFileProgress(addedFileState.key, 'ERROR');
                            }
                        }),
                    );
                    const imgs: string[] = []
                    fileStates.map((state) => {imgs.push(state.file.toString())})
                    setImages(imgs)
                    }}
                />
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
}

export {ListingImageForm};