"use client";
import React, { useContext } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  generateImageSchema,
  GenerateImageSchema,
} from "@/lib/formValidationSchemas";
import SelectSize from "./SelectSize";
import { generateImage, uploadFile } from "@/lib/actions";
import { UserDetailContext } from "@/context/UserDetailContext";
import useCanvasEditor from "@/hooks/UseCanvasHook";
import { FabricImage } from "fabric";

const GenerateImage = ({ modelList }) => {
  const { userDetail } = useContext(UserDetailContext);
  const { canvasEditor } = useCanvasEditor();

  const form = useForm({
    resolver: zodResolver(generateImageSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const url = await generateImage(data);
      //   将信息保存到数据库
      await uploadFile({
        name: new Date().getTime() + "_canvas_ai_image.png",
        tag: "ai_text_to_image",
        url: url,
        type: "image/png",
        userId: userDetail?.id,
      });
      const canvasImageRef = await FabricImage.fromURL(url);
      canvasImageRef.set({
        scaleX: 0.1,
        scaleY: 0.1,
      });
      canvasEditor.add(canvasImageRef);
      canvasEditor.renderAll();
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log("errors", errors);
          })}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Textarea
                    className="h-[200px]"
                    placeholder="描述想要生成的图片"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>模型</FormLabel>

                <Select onValueChange={field.onChange} defaultValue="">
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="模型" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {/* {modelList} */}
                    {modelList.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>图片比例</FormLabel>
                <FormControl>
                  {/* <div className="flex flex-wrap gap-2 ">
                    <Button
                      onClick={() => field.onChange("1024x1024")}
                      variant="outline"
                    >
                      1:1
                    </Button>
                    <Button
                      onClick={() => field.onChange("864x1152")}
                      variant="outline"
                    >
                      3:4
                    </Button>
                    <Button
                      onClick={() => field.onChange("1152x864")}
                      variant="outline"
                    >
                      4:3
                    </Button>
                    <Button
                      onClick={() => field.onChange("1280x720")}
                      variant="outline"
                    >
                      16:9
                    </Button>
                    <Button
                      onClick={() => field.onChange("720x1280")}
                      variant="outline"
                    >
                      9:16
                    </Button>
                    <Button
                      onClick={() => field.onChange("832x1248")}
                      variant="outline"
                    >
                      2:3
                    </Button>
                    <Button
                      onClick={() => field.onChange("1248x832")}
                      variant="outline"
                    >
                      3:2
                    </Button>
                  </div> */}
                  <SelectSize handleSelectedRatio={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            生成图片
            {form.formState.isSubmitting && (
              <Loader2Icon className="animate-spin" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GenerateImage;
