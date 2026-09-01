package com.leen.fundamentals;

public class Playground {
    public static void main(String[] args){
        System.out.println("autoboxing int VS Integer:  ");
        int a=3;
        Integer A=a;
        System.out.println("a= "+ a);
        System.out.println("A= " +A);

        System.out.println("== VS .equals(): ");
        String string1="hi";
        String string2=new String("hi");
        System.out.println(string1 == string2);
        System.out.println(string1.equals(string2));

        System.out.println(5 / 2);
        System.out.println(5.0 / 2.0);
        String nullText =null;
        try {
            System.out.println(nullText.length());
        } catch (NullPointerException e) {
            System.out.println("NullPointerException happened");
        }

        if (nullText!= null) {
            System.out.println(nullText.length());
        }


    }
}
